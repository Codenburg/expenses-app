import { Button } from "@/components/ui/button";
import { ServerOff } from "lucide-react";

export default function Error503() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <ServerOff  className="mx-auto h-12 w-12 text-primary"/>
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground">
          503
        </h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Servicio No Disponible
        </h2>
        <p className="mt-4 text-muted-foreground">
          Lo sentimos, pero nuestros servicios no están disponibles en este
          momento. Vuelva a intentarlo más tarde.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => window.location.reload()}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Recargar página
          </Button>
        </div>
      </div>
    </div>
  );
}
