/**
 * Descarga un archivo (por ejemplo un PDF en /assets) forzando el nombre
 * de archivo indicado, sin necesidad de abrir una pestaña nueva.
 *
 * Funciona con cualquier URL a la que el navegador tenga acceso: un
 * archivo estático en /assets, o una Blob URL generada dinámicamente
 * (ej. `URL.createObjectURL(blob)`) si en el futuro el PDF se genera
 * en el cliente o llega desde una API.
 */
export function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}