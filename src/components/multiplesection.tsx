import { secureHeapUsed } from "crypto";

export default async function MultipleSection() {
    return(
        <section className="py-16 bg-[#040d5c] text-white text-center">
            <div className=" max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="col-span-1">
                    <div>
                        <button className="">Skill</button>
                    </div>
                   <div>
                        <button>Experience</button>
                   </div>
                    <div>
                        <button>Education</button>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
    
}