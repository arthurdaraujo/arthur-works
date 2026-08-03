import Styled from 'styled-components';
import {useState} from 'react';

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleSubmit(e) {
        e.preventDefault(); 

        console.log(formData)
        alert(formData.name)
    }

    function buttonDisabled() {
        if(formData.name === "" || formData.email === "" || formData.subject === "" || formData.message === ""){
            return true
        } else {
            return false
        }
    }

    return (
        <MainStyled>  
            <ArticleStyled>
                <h1>
                    Let's create something together.
                </h1>

                <p>
                    I'm always open to discussing commissions, creative projects and opportunities to collaborate.
                </p>

                <p>
                    Fill out the form below, and I'll get back to you as soon as possible.
                </p>
            </ArticleStyled>

            <SectionStyled>

                <FormStyled onSubmit={(e) => handleSubmit(e)}>

                    <div>
                        <label htmlFor="name">
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject">
                            Subject
                        </label>

                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            placeholder="Illustration commission"
                        />
                    </div>

                    <div>
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="8"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    <button type="submit" disabled={buttonDisabled()}>
                        Send Message
                    </button>

                </FormStyled>


            </SectionStyled>            
            
        </MainStyled>
    )
}

const MainStyled = Styled.main`    
    padding-top: 100px;
    padding: 100px 50px;
    display: flex;      
    justify-content: center;
    gap: 40px;

    @media (max-width: 900px){
        flex-direction: column-reverse;
        align-items: center;
        padding: 100px 110px;
    }   

    @media (max-width: 600px){
        padding: 100px 20px;
    }
`

const ArticleStyled = Styled.article`
    //border: 1px solid red;
    flex: 1;

    h1{
        font-size: clamp(3rem,5vw,5.8rem);
        font-weight: 500;
        line-height: .95;
        margin-bottom: 60px;
    }

    p{
        font-size: 1.15rem;
        line-height: 1.7;
        color: #3b3b3b;

        margin-bottom: 20px;
    }

    @media (max-width:900px){
      width: 100%;
    }   
`

const SectionStyled = Styled.section`
    //border: 1px solid blue;
    flex: 1;

    @media (max-width:900px){
      width: 100%;
    } 
`

const FormStyled = Styled.form`

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 0 30px;

    @media (max-width:900px){
      padding: 0;
    } 

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;

        label{
            font-size: 1.1rem;
            font-weight: 600;        
        }

        input, textarea{
            padding: 10px; 

            &::placeholder{
                 color: rgb(161, 161, 161);  
            }
        }
    }

    button{
        background: #111;
        color: #fff;
        border: none;
        //padding: 10px 20px;
        width: 200px;
        padding: 15px 0;
        font-size: 1rem;
        cursor: pointer;

        &:hover{
            background: #333;
        }
    }

    button:disabled{
        opacity: .5;
        cursor: not-allowed;
    }
`