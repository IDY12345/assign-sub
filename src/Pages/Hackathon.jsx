import React,{useState,useEffect} from 'react'
import './Hackathon.css'
import { Link, useParams } from 'react-router-dom'
import { collection, getFirestore,getDocs, doc, getDoc } from 'firebase/firestore'
import { app } from '../firebase'
function Hackathon() {
    const { id } = useParams()
    const db=getFirestore(app);
    const SubRef=doc(db,"Submissions","I5MZSMMf1ssm1rVbI4Rp")
    const myDoc= getDoc(SubRef)
    const [sub, setSub] = useState([])
    console.log(myDoc.data)
    useEffect(()=>
    {
    const getSubmissions=async()=>
    {
        const data = await getDocs(SubRef);
        setSub(data.docs.map((doc) => ({ ...doc.data(), id})));
    };
    getSubmissions()
})
    return (
        <div className='Hackathon-Page'>
            <Link to="/"><img src="assets\AI Planet Logo.png" alt='' className='Logo' /></Link>
            <div className='Hackathon-Header'>
                    <><div className='Display-Hackathon'>
                        <img src='assets\InterviewMe.png' className='Image-display1' alt="" />
                        <p className='Hack-Name'>{myDoc.title}</p>
                        <div className='All-btns'>
                            <button className='Edit-btn'><i class="fas fa-edit" id='Edit-icon'></i>Edit</button>
                            <button className='Delete-btn'><i class="fa fa-trash" id="Delete-icon"></i>Delete</button>
                        </div>
                    </div><p className='Summary-Hack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusamus accusantium eligendi fugiat minus qui?</p><div className='Star-Line'>
                            <i class="fa-regular fa-star" id="Star"></i>
                            <div className='Line'></div>
                            <div className='Calendar'>
                                <i class="fa-regular fa-calendar" id="Calendar-icon"></i>
                                Date
                            </div>
                        </div></>
            </div>
            <div className='Description-Hack'>
                <div className='Description'>
                    <p className='Description-Title'>Description</p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dicta, ea voluptatem sint soluta veniam. Voluptates sit ut hic, tempore minima et adipisci quam vel officiis reiciendis nobis veritatis nisi? Nobis sint consequuntur quia quibusdam rerum aut dolore exercitationem dignissimos odio fuga eius culpa, modi cum reprehenderit animi porro sit voluptatem qui harum hic ab debitis numquam. Fuga animi error reiciendis autem ullam, possimus esse totam deserunt consectetur blanditiis dolore ut illum perspiciatis inventore harum exercitationem veniam eum nostrum velit commodi soluta tempora. Consequatur, ducimus. Numquam ducimus illo accusamus delectus ullam nulla, quod soluta deleniti sunt officia reiciendis ipsum doloremque id unde a omnis animi atque? Ut nemo repudiandae ullam consequuntur non explicabo tenetur, illum illo nostrum cumque, voluptatibus eaque nobis et totam provident amet! Eos accusamus, minima beatae error aperiam provident porro illum quidem cumque saepe laborum quaerat odio sequi ipsum veritatis omnis facere quae. Officiis, accusamus dolore tempore quis eius aliquid dolorum saepe? Soluta eius ex, impedit earum magni atque incidunt iste laborum distinctio praesentium asperiores dignissimos esse rerum voluptate consequatur reprehenderit? Earum, voluptate? Voluptas sit, laudantium est velit labore quos debitis assumenda asperiores fuga pariatur eos. Necessitatibus a ipsam pariatur rerum. Saepe doloremque asperiores sapiente, veniam dignissimos aperiam delectus, error optio omnis, libero reiciendis. Eum omnis deleniti iusto in illum dolores incidunt maiores harum, aliquid commodi iure veritatis voluptatem, porro iste ducimus ab? Asperiores, excepturi alias magnam veniam fuga illum laborum cumque quia sequi aliquid velit rerum voluptate corrupti eligendi iure, quod molestiae minus fugit inventore ratione possimus dolorem aperiam ducimus. Odit corrupti eveniet id voluptates libero repellat molestias earum asperiores aspernatur veniam quo vel ipsa, sint ipsam impedit deleniti reiciendis modi obcaecati enim est error, ea autem harum provident. Ex, recusandae! Ea molestiae officiis ab delectus commodi, voluptas dolore, magnam enim, magni laborum reprehenderit vel at! Voluptatibus rerum veniam error quisquam, modi pariatur commodi? Accusamus quasi nobis exercitationem adipisci quibusdam explicabo placeat sequi laudantium vel aliquam voluptatibus, natus voluptates sapiente doloremque minus tempore iste libero laboriosam commodi ad. Voluptas itaque rem animi amet aperiam, dolore facilis asperiores molestiae a magnam cupiditate id rerum repellendus, minus explicabo accusantium eaque eos, excepturi aspernatur. Animi alias, illo magni excepturi rerum eos, laudantium doloribus quas, et sapiente vel! Id corrupti porro distinctio debitis magnam illum quasi nostrum unde, temporibus placeat nulla sapiente cum quam qui aspernatur minima nemo quis? Vel ratione dicta labore facilis perspiciatis aliquam, laborum iure ipsum, corporis enim quam. Rerum nobis ea nemo, omnis quidem dolores distinctio nostrum dolore sunt laboriosam eum autem ipsam minus eligendi consequatur sit ut officia delectus enim maxime laborum magni? Quidem nulla veritatis maxime aliquam laudantium odio corrupti doloremque? Est eligendi veniam incidunt nulla, quaerat ipsa excepturi nam velit repellendus id doloribus et architecto cupiditate quisquam adipisci, facere, iste dignissimos nostrum? Quisquam, corporis. Voluptatibus facilis consectetur voluptates pariatur optio nostrum sunt maiores. Quas, labore rerum. Nulla vitae aperiam non esse quos, culpa eum rerum consequatur maxime incidunt amet nihil commodi nobis quia pariatur et excepturi ipsa! Error consequatur quas obcaecati eligendi reiciendis.
                </div>
                <div className='Sub-Info'>
                    <p className='Name'>Hackathon</p>
                    <p className='Name1'>Prestige Interview Challenge</p>
                    <div className='Duration'>
                        <i class="fa-regular fa-calendar" id="Calendar-icon1"></i>
                        <p className='Date-Duration'>24 Feb 2020 - 24 Feb 2023</p>
                    </div>
                    <div className='Link-btn'>
                        <button className='Github-Link1'><i class="fa-brands fa-github" id="github"></i>Github Repository</button>
                        <button className='Github-Link1'><i class="fa-solid fa-square-up-right" id='github'></i>Other Link</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hackathon