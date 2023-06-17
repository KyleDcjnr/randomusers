import React from "react";
const Table = ({ fulldata }) => {
  return (
    <div className= 'bg-[lightblue] w-screen h-screen flex justify-center items-center' >
    <div className= 'bg-[white] w-[95%] h-[75%] flex justify-center border-2 border-black rounded-t-lg p-8'>
      <table className='w-[100%]'>
        <thead className=''>
          <tr className='border-2 border-black rounded-t-lg w-[100%] text-center'>
            <td className=''>Serial No</td>
            <td className=''>FullName</td>
            <td className=''>Phone Number</td>
            <td className=''>Email Address</td>
            <td className=''>Street</td>
          </tr>
        </thead>
        {fulldata.map((prodata, index) => (
          <>
            <tbody>
              <tr className="border-2 border-black text-center" key={prodata.id}>
                <td className="border-2 border-black ">{index + 1}</td>
                <td className="border-2 border-black ">{prodata.name}</td>
                <td className="border-2 border-black ">{prodata.phone}</td>
                <td className="border-2 border-black ">{prodata.email}</td>
                <td className="border-2 border-black ">
                  {prodata.address.street} {", "} {prodata.address.suite} {", "}{" "}
                  {prodata.address.city}
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
    </div>
  );
};
export default Table;