import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Field from "../../components/Field";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setServerError("");
      try {
        await login(value.email, value.password);
        navigate("/boeken");
      } catch (err) {
        setServerError(err instanceof Error ? err.message : "Onbekende fout");
      }
    },
  });

  return (
    <form
      className="flex w-full flex-col items-start gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) =>
            !value
              ? "Vul je e-mailadres in"
              : !value.includes("@")
              ? "Dit is geen geldig e-mailadres"
              : undefined,
        }}
        children={(field) => (
          <Field
            id="email"
            label="E-MAILADRES"
            type="email"
            autoComplete="email"
            placeholder="E-mailadres"
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.isTouched ? field.state.meta.errors.join(", ") : undefined}
          />
        )}
      />

      <form.Field
        name="password"
        validators={{
          onChange: ({ value }) => (!value ? "Vul je wachtwoord in" : undefined),
        }}
        children={(field) => (
          <Field
            id="password"
            label="WACHTWOORD"
            type="password"
            autoComplete="current-password"
            placeholder="Wachtwoord"
            name={field.name}
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            error={field.state.meta.isTouched ? field.state.meta.errors.join(", ") : undefined}
          />
        )}
      />

      {serverError && (
        <p role="alert" className="text-error">
          {serverError}
        </p>
      )}

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="flex items-center justify-center self-stretch rounded-full border-2 border-ink bg-cobalt px-3 py-6
              font-sans text-[16px] font-bold leading-none text-white shadow-hard-sm
              transition duration-150 ease-in-out hover:bg-mint
              active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
              disabled:opacity-50"
          >
            {isSubmitting ? "Bezig..." : "Inloggen"}
          </button>
        )}
      />
    </form>
  );
}