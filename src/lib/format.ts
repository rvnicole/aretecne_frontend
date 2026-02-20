export function formatCurrency(value: string) {
    const monto = parseFloat(value);

    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(monto);
}