import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h5>404 | Página no encontrada</h5>
      <Link href="/">Volver</Link>
    </div>
  );
};

export default NotFound;
