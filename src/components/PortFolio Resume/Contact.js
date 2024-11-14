export default function Contact () {
    const config ={
        email:'ramyav310504@gmail.com',
        phone:9363390947
    }
    return <section id='Contact' className='flex flex-col bg-secondary px-5 py-32'>
        <div className='flex flex-col items-center text-white'>
        <h1 className='text-4xl border-b-4 border-purple-600 mb-5 w-[140px] font-bold'>Contact</h1>
        <p className='pb-5'>if you want to discuss more in detail,please contact me</p>
        <p className="py-2"><span className="font-bold">Email : </span>{config.email}</p>
        <p className="py-2"><span className="font-bold">Phone : </span>{config.phone}</p>
        </div>
          
    </section>
}