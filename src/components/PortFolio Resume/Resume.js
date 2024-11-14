import ResumeImg from '../assets/Resume.jfif';

export default function Resume () {
    const config = {
        link:"https://docs.google.com/document/d/1NOXaoJfThGb1vyx78iZSJ8XdUNRp3I6l"
    }
    return <section id='Resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]'src={ResumeImg}/>
        </div>
 <div className='md:w-1/2 flex justify-center ml-10 text-white'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl border-b-4 border-purple-600 mb-5 w-[140px] font-bold'>Resume</h1>
        <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a>
        </p>
       
        </div>
            </div>
    </section>
}