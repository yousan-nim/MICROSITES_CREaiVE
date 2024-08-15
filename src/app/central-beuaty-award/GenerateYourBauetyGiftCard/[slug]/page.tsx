// export function generateStaticParams() {
//     return [{ id: '1' }, { id: '2' }, { id: '3' }]
// }

// export default function Page({ params }: { params: { _id: string } }) {


//     return (
//         <div>
//             Test : { params._id}
//         </div>
//     )
// }


// export function generateStaticParams() {
//     return [ { _id: [""] } ]
//   }

//   export default function Page({ params }: { params: { _id: string } }) {
//     return (
//         <div>
//             Test : { params._id}
//         </div>
//     )
//   }

export const dynamic = 'force-static'
export const dynamicParams = true

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}