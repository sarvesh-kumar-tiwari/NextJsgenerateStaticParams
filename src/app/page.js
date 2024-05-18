import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result   = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="container">
     <div className="box-border h-[100%]  p-4 border-4 w-[100%]">
        <table className="border-separate border-spacing-2 border w-[100%]">
         
            <thead>
            <tr className="border-separate border-spacing-2 ">
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
          {
             result.map((item,index)=>{
              return(<tr key={index} className="border-separate border-spacing-2 ">
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><Link  className="btn-primary" href={`product/${item.id}`}>Action</Link></td>
               </tr>)
             })
          }
          </tbody>
        </table>
        </div>
     </div>
    </main>
  );
}
