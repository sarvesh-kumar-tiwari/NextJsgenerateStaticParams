import React from 'react'
export async function  generateStaticParams()
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result   = await response.json();
    return result.map((user) => ({
      id: user.id.toString(),
    }))
}
export default async function userPages({params}) {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user  = await users.json();
  return (
      <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="container">
        <div className="box-border h-[100%] p-4 border-4 w-[100%]">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <div className="flex-1"><b>Name -:</b> {user.name}</div>
                  <div className="flex-1"><b>Email -:</b> -: {user.email}</div>
                </div>

                <div className="flex justify-between">
                  <div className="flex-1"><b>Street -:</b> {user.address.street}</div>
                  <div className="flex-1"><b>City -:</b> -: {user.address.city}</div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </>
    )
  }


