import { QueryClient, QueryClientProvider } from "react-query";
import RowLayout from "../../layouts/RowLayout/RowLayout";
import AlcoholViewer from "../../components/AlcoholViewer/AlcoholViewer";
import NonAlcoholViewer from "../../components/NonAlcoholViewer/NonAlcoholViewer";
import CocktailViewer from "../../components/CocktailViewer/CocktailViewer";
import AlcoholViewerLayout from "../../layouts/AlcoholViewerLayout/AlcoholViewerLayout";

function AlcoholViewPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AlcoholViewerLayout>
        <AlcoholViewer />
        <NonAlcoholViewer />
        <CocktailViewer />
      </AlcoholViewerLayout>
    </QueryClientProvider>
  );
}

export default AlcoholViewPage;
