import { QueryClient, QueryClientProvider } from "react-query";
import AlcoholAppendContainerLayout from "../../layouts/AlcoholAppendFormLayout/CocktailAppendContainerLayout/AlcoholAppendContainerLayout";
import AlcoholForm from "../../components/AlcoholForm/AlcoholForm";
import NonAlcoholForm from "../../components/NonAlcoholForm/NonAlcoholForm";
import CocktailForm from "../../components/CocktailForm/CocktailForm";

function AlcoholAppendFormPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AlcoholAppendContainerLayout>
        <AlcoholForm />
        <NonAlcoholForm />
        <CocktailForm />
      </AlcoholAppendContainerLayout>
    </QueryClientProvider>
  );
}

export default AlcoholAppendFormPage;
