// const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }


// La expresión order && order.customer && order.customer.address && !order.customer.address.city es una serie de verificaciones condicionales que aseguran que todas las propiedades necesarias estén definidas y que la propiedad city no esté definida en el objeto order.customer.address

const order = {};

if (!order?.customer?.address?.city) 
{
    console.log('City is required');

}