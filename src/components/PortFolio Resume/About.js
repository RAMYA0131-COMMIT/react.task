import AboutImg from '../assets/about.jpg';

export default function About () {
    return <section className='flex flex-col md:flex-row bg-primary text-white px-5'id='About'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
 <div className='md:w-1/2 flex justify-center ml-10'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl  border-b-4 border-purple-600 mb-5  w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hello, I am Ramya V, I have Full stack web developer with six months experiance
            as an Intern at WhyTap Global Services.I built beautiful Websites with Html,Css,Boostrap,Javascript,
            React.js,Tailwind Css ang UI/UX design.
        </p>
        <p className='pb-5'>I have hands-on experiance in both frontend and backend development,I am good at frontend developer and
            improving my skills backend developer,I have completed BCA degree from theagaraya college,
            My interest are traveling and hobbies are listening songs,I look forward to your response and 
            wish you a wonderful weekend!
        </p>
        </div>
            </div>
    </section>
}