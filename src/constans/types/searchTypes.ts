export interface SearchBarProps {
  handleSubmit: (
    values: { query: string },
    actions: { setSubmitting: (isSubmitting: boolean) => void },
  ) => void;
  loading: boolean;
}
