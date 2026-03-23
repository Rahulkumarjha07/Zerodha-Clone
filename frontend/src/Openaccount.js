import Button from "@mui/material/Button";

export default function Openaccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">


        <h1 className="mt-2 fs-2">Open a Zerodha account</h1>

        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades
        </p>

        <div className="d-flex justify-content-center mt-3">
          <Button variant="contained" size="medium">
            Sign up now
          </Button>
        </div>

      </div>
    </div>
  );
}