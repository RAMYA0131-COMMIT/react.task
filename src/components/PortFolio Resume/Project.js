import websiteImg from '../assets/Amazon.png';
import websiteImg1 from '../assets/React.png';
import websiteImg2 from '../assets/Touriest.png';

export default function Project(){
    const config = {
        Projects:[
     {
        img:websiteImg,
        description:'E-Commerce website built with MERN Stack.',
        link:'http://github.com/RAMYA0131-COMMIT'
            },
            {
                img:websiteImg1,
                description:'Responsive website built with UIMAP using React.',
                link:'http://github.com/RAMYA0131-COMMIT'
                    },
                    {
                        img:websiteImg2,
                        description:'Responsive website built with Touriest Travel using React.',
                        link:'http://github.com/RAMYA0131-COMMIT'
                            }
        ]

    }
    return <section id='Projects' className="flex flex-col py-20 px-5 justify-center bg-secondary"> 
        <div className="w-full">
        <div className="flex flex-col px-10 py-5 text-white "> 
        <h1 className="text-4xl border-b-4 border-purple-600 mb-5 w-[140px] font-bold">Projects</h1>
        <p>There are some of best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
        </div> 
        </div>
        <div className="w-full text-white"> 
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            {config.Projects.map((Project)=>
            <a href={Project.link}>
            <div className='relative'> 
            <img className='h-[200px]' src={Project.img}/>
            <div className='project-desktop'>
                <p className='text-center px-5 py-5'>{Project.description}</p>
            <div className='flex justify-center'>
                <a className='btn' target='_blank' href={Project.link}>View Project</a>
            </div>
        </div>
        </div>
        </a>
    )}
            
</div>
       </div>
             
    </section>
}