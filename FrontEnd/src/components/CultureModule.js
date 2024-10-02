import React, { useEffect } from 'react';
import './CultureModule.css'; // Including the CSS styles
import { colors } from '@mui/material';

const CultureModule = () => {
    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");

        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }    
            slides[slideIndex - 1].style.display = "block";  
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        };

        showSlides();
    }, []);

    const showMoreImages = (type) => {
        alert(`Loading more images for ${type}`);
        // Logic to load more images can be implemented here
    };

    return (
        <div className="background-image">
            <div className="container">
                <h1 className="heading">Celebrating Indian Culture</h1>
                
                <div className="slideshow-container">
                    <div className="slide fade">
                        <img src="https://varnam.my/wp-content/uploads/2021/12/Untitled-design-11-1.jpg" alt="Dance" />
                    </div>
                    <div className="slide fade">
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png" alt="Food" />
                    </div>
                    <div className="slide fade">
                        <img src="https://cdn.prod.website-files.com/637f32081b68888e6d1bdd50/655f089b1e818d76353a70fb_Group%20of%20individuals%20in%20traditional%20costumes%20from%20different%20states%20of%20India.jpg" alt="Traditional Dress" />
                    </div>
                    
                </div>

                <div className="culture-info">
                    <h2>Indian Culture</h2>
                    <div className="section">
                        <h3>Food</h3>
                        <p>India offers a wide range of flavors from spicy curries to sweet desserts.</p>
                        <p>From north to south, every state has its unique cuisine.</p>
                        <p>Food reflects the rich cultural heritage of each region.</p>
                        <div className="image-grid">
                            <img src="https://gosumitup.com/wp-content/uploads/2022/01/North-Indian-Cuisine-North-Indian-Food.jpg" alt="Food 1" />
                            <img src="https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg" alt="Food 2" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpzG6j6DgUzH0H-6Y0PhlRWPEZ7ghe688ong&s" alt="Food 3" />
                        </div>
                    </div>

                    <div className="section">
                        <h3>Dance</h3>
                        <p>Classical dances like Bharatanatyam and Kathak are ancient art forms.</p>
                        <p>Each region has its folk dances, celebrating festivals and seasons.</p>
                        <p>Dance plays a vital role in expressing cultural narratives.</p>
                        <div className="image-grid">
                            <img src="https://www.psyfans.net/wp-content/uploads/2021/05/bharatanatyam.jpg" alt="Dance 1" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuYEZZFjidpZClG4SnHnHcc-VyyCPiH9xm-eAXo2_xqSsmM79KhosrQqgm6OM3BpFnck&usqp=CAU" alt="Dance 2" />
                            <img src="https://www.thestatesman.com/wp-content/uploads/2022/01/Kathakali-1.jpg" alt="Dance 3" />
                        </div>
                    </div>
                    <div className="section">
                        <h3>Religions</h3>
                        <p >India is home to multiple religions, including Hinduism, Islam, and Christianity.</p>
                        <p>Religious festivals like Diwali, Eid, and Christmas are celebrated with fervor.</p>
                        <p>The diverse religious landscape creates unity in diversity.</p>
                        <div className="image-grid">
                            <img src="https://przekroj.org/app/uploads/migrated/63188071b6164-1200x563.jpg?cftstmp=1726751107" alt="Religion 1" />
                            <img src="https://img.etimg.com/thumb/msid-64206785,width-640,height-480,imgsize-383460,resizemode-4/why-do-muslims-fast.jpg" alt="Religion 2" />
                            <img src="https://www.catholicnewsagency.com/storage/image/gettyimages-2115330531.jpg?w=670&h=447" alt="Religion 3" />
                        </div>
                    </div>

                    <div className="section">
                        <h3>Languages</h3>
                        <p>India has 22 official languages and numerous dialects spoken across the country.</p>
                        <p>Language is a significant part of India's cultural identity.</p>
                        <p>Each state offers a rich linguistic tradition that adds to the country's diversity.</p>
                        <div className="image-grid">
                            <img src="https://images.indianexpress.com/2019/12/sanskrit.jpg?w=414" alt="Language 1" />
                            <img src="https://images.odishatv.in/uploadimage/library/16_9/16_9_2/Odia-language_1627279220.jpg" alt="Language 2" />
                            <img src="https://media.licdn.com/dms/image/C4D12AQGEjSGxL-oSIg/article-cover_image-shrink_600_2000/0/1643797279303?e=2147483647&v=beta&t=q75LnGnng29RjppY6Xwc-uTDIr-w6uUtVPegWh4ER3Y" alt="Language 3" />
                        </div>
                    </div>
                </div>

                <div className="quote-cards">
                    <div className="card"><p>"Unity in diversity is India's strength." - Unknown</p></div>
                    <div className="card"><p>తెలుగు: "అమాయకత్వంలోనే గొప్పతనం ఉంది." - పౌరాణిక</p></div>
                    <div className="card"><p>"Ek bharat, shresth Bharat." - Hindi Quote</p></div>
                    <div className="card"><p>"ਨਾਨਕ ਨਾਮ ਚੜਦੀ ਕਲਾ, ਤੇਰੇ ਭਾਣੇ ਸਰਬੱਤ ਦਾ ਭਲਾ." - Punjabi Quote</p></div>
                </div>
            </div>
        </div>
    );
};

export default CultureModule;