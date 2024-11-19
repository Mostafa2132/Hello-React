
export default function About() {
  return (
    <>
          <div className=" bg-[#1abc9c] h-[88vh] flex items-center justify-center flex-col  ">
     
        <h1 className="text-3xl text-white uppercase font-extrabold pb-4 text-center" >
        about component
        </h1>

      
        <div className="flex items-center justify-center pb-4 text-center">
          <span className="before:content-[''] before:block before:w-20 before:h-[4px] before:bg-white before:mr-2"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="after:content-[''] after:block after:w-20 after:h-[4px] after:bg-white after:ml-2"></span>
        </div>
        <p className="text-white font-semibold">Graphic Artist - Web Designer - Illustrator</p>

        <div className="container grid md:grid-cols-2 pt-4 text-teal-50">
        <div className="child px-5">
            <p className="max-w-[94%] ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="child px-5">
            <p  className="max-w-[94%] ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>

  
    </>
  )
}
