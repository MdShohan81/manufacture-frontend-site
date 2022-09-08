import React from 'react';
import blog_hero from '../../assets/blog-hero.jpeg'

const Blog = () => {
    return (
        <div className='bg-base-200'>

            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={blog_hero} class="max-w-lg rounded-lg shadow-2xl" alt='blog-img'/>
                <div>
                <p class="py-6">Kimberly-Jayson Corp., Irving, Texas, reports it will invest $30 million to expand and improve its Berkley Mill nonwovens plant in Hendersonville, N.C. The facility manufactures nonwovens used in the North American adult and feminine care brands Depend, Poise and U by Kotex, among other brands</p>
                <p class="py-6">The two-year project is expected to add 14 new jobs at the site. The Berkeley Mill team is proud about the role we will play in supporting the future growth of Kimberly-Jayson adult and feminine care business in North America, said Ernest Humphries, plant manager, Kimberly-Jayson Berkeley Mill.</p>
                <p class="py-6">“This investment, combined with the commitment of our employees and the support of the local community, will bolster the mill’s competitiveness and position us for continued success.” “Henderson County is very proud to support Berkeley Mill’s expansion,” said Michael Edney, chairman of the Henderson County Board of Commissioners. “Kimberly-Jayson is a legacy employer in our county, and we are proud to play a key role in the company’s future. We look forward to many more years together.”</p>
                </div>
            </div>
            </div>

            <div className='mt-10 grid lg:grid-cols-2 grid-cols-1'>

            </div>

        </div>
    );
};

export default Blog;