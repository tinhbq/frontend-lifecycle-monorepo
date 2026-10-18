import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete Frontend Development and Deployment Lifecycle</h1>

      <Button
        onClick={() => {
          alert(formatCurrency(1000));
        }}
      />
    </>
  );
}

export default App;
