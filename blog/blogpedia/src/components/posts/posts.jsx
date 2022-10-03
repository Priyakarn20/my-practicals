import React from "react";
import "./posts.css";
import Post from "../post/post";

const Posts = () => {
    const blogPosts = [
        {
            title: " How to be Positive all the time ",
            body: `To be a cheerful and positive person the first thing we have to do is change our mindset. Erase everything negative from our minds. To do this there are several techniques very easy to implement such as giving thanks for what you have. This changes your state of mind instantly.
            Most of the time, people have a negative attitude towards life. We live in anger; from any difficulty we see a failure, they have no goals to achieve
         .Tips to be a happy and positive person:

         Be thankful. Give thanks every day about your triumphs, gifts, qualities, and the people around you. Be grateful for life. Put your mind on the things you have and don’t focus on thinking about what you don’t have.
         Enjoy everything in life. Enjoy every single situation, no matter how simple it seems to you.
         Remember every night all the good things that have happened to you. When night comes, remember all the good things that happened to you during the day.
         Avoid negative thoughts. Try to replace negative thoughts with positive ones.
         Live in the present. Learn to live in the present. Don’t worry too much about the past or things to come.
         Avoid the news. Don’t watch or listen to the press. It always gives a false reality about life.
         Show your love. Show your love for people, provide them with a hug, show them a smile, talk to them, spend time with them.
         Avoid negativity. Stay away from people who are always thinking negatively.
         Don’t play the victim. Be responsible, change the attitude of the victim in front of situations.
         Don’t criticize. Don’t criticize anyone or anything; and don’t judge anyone either.
         Minimize your failures. Do not be discouraged because you have a breakdown; on the contrary, think that it is a small step towards achieving your goals.
         Do not compare yourself to anyone. Never compare yourself to anyone and do not believe that you are better than them or that they are better than you.
         Think that you are going to achieve what you set out to do. Think your goals are possible, but never think they are impossible.
         Fight for what you want. Fight for your purposes, set your objectives, and focus on achieving your dreams. Do not be discouraged because you have a failure, but think that it is a small step towards the success of your goals.
         Enjoy yourself. Enjoy the good moments that life offers you, surround yourself with positive people who will attract your positive energies.`,
         author: "Priya karn",
         imgUrl:"https://cdn.dribbble.com/users/246068/screenshots/10451877/stay_positive-dribbble.gif"
        },
        {
            title: "How to be focused",
            body:`Three Ways to Focus the Wandering Mind.
           It happens to all of us: you’re working away on something you’ve got to get done, and suddenly you realize that for quite some time you’ve been lost in a reverie about something else entirely. You don’t know when your mind went off track, nor how long you’ve been meandering down this one.

Our minds wander, on average 50 percent of the time. The exact rate varies enormously. When Harvard researchers had 2,250 people report what they were doing and what they were thinking about at random points throughout their day, the doing-thinking gaps ranged widely.

But the biggest gap was during work: mind-wandering is epidemic on the job. But we can take steps that will help us stay on task more of the time when we need to.

1. Manage your temptations.
Many of the distractors that pull us away from what we’re working on are digital: tweets, emails, and the like. There are several apps that can wall off those temptations to wander off. Chrome has two free apps that do this: Nanny for Google blocks off websites you might be tempted to visit, for whatever length of time you decide; StayFocusd limits the amount of time (also set by you) you can spend in your inbox, on Facebook, or wherever else you might be seduced away.

 2. Monitor your mind and take second thoughts.
Noticing where your mind has gone – checking your twitter feed instead of working on that report – gives you the chance for a second thought: “my mind has wandered off again.” That very thought disengages your brain from where it has wandered and activates brain circuits that can help your attention get unstuck and return to the work at hand.

3. Practice a daily mindfulness session.
This mental exercise can be as simple as watching your breath, noticing when your mind has wandered off, letting go of the wandering thought and bringing it back to your breath again. These movements of the mind are like a mental workout, the equivalent of repetitions in lifting free weights: every rep strengthens the muscle a bit more. In mindfulness what gets stronger are the brain’s circuits for noticing when your mind has wandered, letting go, and returning to your chosen focus. And that’s just what we need to stay with during that one important task we’re working on. 
`,

            
            author:"Abhishek Gowda",
            imgUrl:"https://cdn.dribbble.com/users/200279/screenshots/3387115/trying_to_focus.gif",
        },

    ];
    return (
        <div className="posts-container">
            {blogPosts.map((post,index) => (
              <Post key={index} index={index} post={post} />  
            ))}
        </div>
    );
};

export default Posts;