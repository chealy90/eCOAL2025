<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $articles = [
            [
                'title' => 'Metallica Ignites the Stage in Los Angeles',
                'content' => 'The legendary metal band delivered an electrifying performance at the Crypto.com Arena. Fans were thrilled by classics like Enter Sandman and Master of Puppets.',
                'thumbnailURL' => 'https://www.leparisien.fr/resizer/21Upx8OWmCYdFmb24C2c1rgFefk=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/NCO2PQS5XJBGFDLYRUATKCDKFQ.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'metallica.jpg',
                'leadStory' => true
            ],
            [
                'title' => 'Beyoncé Shines Bright in Paris',
                'content' => 'Queen Bey mesmerized fans at the Stade de France, delivering flawless vocals and stunning choreography. Halo was a show-stopper.',
                'thumbnailURL' => 'https://www.liberation.fr/resizer/DMh4XOB8I4dFe4w1AoFuTYuoZaQ=/768x0/filters:format(jpg):quality(70):focal(5923x2765:5933x2775)/cloudfront-eu-central-1.images.arcpublishing.com/liberation/NGOD56WZVJFBPKNHV47W2JXWII.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'beyonce.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'The Rolling Stones Keep Rock Alive in London',
                'content' => 'Rock legends The Rolling Stones proved they still have it. Songs like Satisfaction and Paint It Black had the crowd singing along.',
                'thumbnailURL' => 'https://www.rollingstone.fr/wp-content/uploads/2024/07/the-rolling-stones.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'rollingstones.jpg',
                'leadStory' => true
            ],
            [
                'title' => 'Travis Scott Brings the Hype to Houston',
                'content' => 'Travis Scott’s performance in Houston was high-energy and thrilling. Sicko Mode set the crowd on fire!',
                'thumbnailURL' => 'https://www.evenement.com/wp-content/uploads/2024/09/Travis-Scott.png.webp',
                'mediaType' => 'image',
                'mediaURL' => 'travisscott.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'Coldplay’s Magical Night in Tokyo',
                'content' => 'Coldplay’s Music of the Spheres tour enchanted fans in Tokyo. Fix You was a breathtaking moment.',
                'thumbnailURL' => 'https://www.observatoiredeleurope.com/wp-content/uploads/2024/09/1726651153_La-tournee-2025-de-Coldplay-proposera-des-billets-abordables-et.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'coldplay.jpg',
                'leadStory' => true
            ],
            [
                'title' => 'Kendrick Lamar’s Lyrical Mastery in New York',
                'content' => 'Kendrick Lamar delivered a mind-blowing set at Barclays Center. Songs like Alright and DNA were electrifying.',
                'thumbnailURL' => 'https://cdn-www.konbini.com/files/2024/06/POP-OUT.jpeg?width=1200&quality=75&format=webp',
                'mediaType' => 'image',
                'mediaURL' => 'kendrick.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'Arctic Monkeys’ Indie Rock Bliss in Berlin',
                'content' => 'The band’s cool and effortless performance captivated Berlin. Do I Wanna Know? gave fans chills.',
                'thumbnailURL' => 'https://leclaireur.fnac.com/wp-content/uploads/2021/11/monkeys-1256x826.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'arcticmonkeys.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'Billie Eilish’s Ethereal Performance in Sydney',
                'content' => 'Billie delivered an intimate and atmospheric set in Sydney. Happier Than Ever was unforgettable.',
                'thumbnailURL' => 'https://cdn-www.konbini.com/files/2024/09/billieeilish_setlist_hitmehardandsoft.png?width=1200&quality=75&format=webp',
                'mediaType' => 'image',
                'mediaURL' => 'billieeilish.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'Drake’s Hit-Filled Night in Toronto',
                'content' => 'Drake owned the stage in Toronto, performing massive hits like God’s Plan and In My Feelings.',
                'thumbnailURL' => 'https://seattlerefined.com/resources/media2/16x9/full/1500/center/80/55fa1942-e1cf-4976-b45b-db3f2c784ca1-jumbo16x9_IMG5871.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'drake.jpg',
                'leadStory' => false
            ],
            [
                'title' => 'Tomorrowland Delivers an EDM Spectacle',
                'content' => 'Tomorrowland’s visuals and beats from DJs like Martin Garrix and David Guetta created a mind-blowing experience.',
                'thumbnailURL' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tomorrowland2016mainstage.jpg/500px-Tomorrowland2016mainstage.jpg',
                'mediaType' => 'image',
                'mediaURL' => 'tomorrowland.jpg',
                'leadStory' => false
            ]
        ];
        
        foreach ($articles as $articleData) {
            $article = Article::create($articleData);
        }
        
     
        $tag1 = Tag::create(['name' => 'ecoal25']);
        $tag2 = Tag::create(['name' => 'react']);

        $article->tags()->attach([$tag1->id, $tag2->id]);
       
    }
}
