require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const User = require('./models/User');

const blogs = [
  {
    title: 'The Future of Artificial Intelligence in Everyday Life',
    summary:
      'Exploring how AI is revolutionizing the way we work, communicate, and live our daily lives. From smart homes to autonomous vehicles, discover what\'s next.',
    content: `Artificial intelligence is no longer a concept confined to science fiction. It has quietly woven itself into the fabric of our daily routines — from the moment we wake up to the recommendations we see before bed.

**Smart Homes & Personal Assistants**
Voice assistants like Alexa, Siri, and Google Assistant have become household staples. They manage our calendars, control our smart devices, and even order groceries. The home is becoming an intelligent environment that learns and adapts to our preferences.

**Healthcare Revolution**
AI-powered diagnostics are helping doctors detect diseases earlier than ever. Machine learning models can analyze thousands of medical images in seconds, identifying patterns human eyes might miss. This translates to faster diagnoses and better patient outcomes.

**The Workplace of Tomorrow**
Automation is reshaping industries. Repetitive tasks are being handled by algorithms while humans focus on creativity, strategy, and empathy — the skills machines cannot replicate. Rather than replacing jobs, the most successful organizations are using AI to augment human capability.

**Ethical Considerations**
With great power comes great responsibility. As AI becomes more embedded in decision-making — from loan approvals to hiring — the need for transparent, fair, and accountable algorithms is more critical than ever.

The future is not AI vs. humans. It is AI with humans, building a world where both can thrive.`,
    category: 'Technology',
    tags: ['AI', 'Machine Learning', 'Future Tech'],
    featured: true,
    readTime: '8 min read',
  },
  {
    title: 'Building Sustainable Habits for Long-Term Success',
    summary:
      'Learn the science behind habit formation and discover practical strategies to build habits that stick. Transform your life one small step at a time.',
    content: `We all have goals. Lose weight, read more, stress less. But why do most of our attempts at change fail within weeks? The answer lies in how habits actually work.

**The Habit Loop**
Neuroscientist Charles Duhigg describes habits as a three-part loop: cue, routine, reward. Understanding this loop is the first step to rewiring behavior. When you want to build a new habit, attach it to an existing cue and make the reward immediate.

**Start Smaller Than You Think**
The biggest mistake people make is starting too big. Want to exercise daily? Start with just 5 minutes. Want to read more? Commit to one page a night. The goal is to make the habit so easy that skipping it feels wrong.

**Environment Design**
Your environment shapes your behavior more than willpower does. Want to eat healthier? Put fruit on the counter and keep junk food out of the house. Want to read before bed? Leave a book on your pillow. Design your surroundings to make good habits the path of least resistance.

**Tracking & Accountability**
What gets measured gets managed. A simple habit tracker — even a paper one — can dramatically improve consistency. Seeing a chain of unbroken days creates a powerful psychological incentive not to break the streak.

**The Compound Effect**
Small habits seem insignificant in the moment but compound dramatically over time. A 1% daily improvement leads to being 37 times better in a year. The magic is in the consistency, not the intensity.`,
    category: 'Lifestyle',
    tags: ['Habits', 'Productivity', 'Self Improvement'],
    featured: false,
    readTime: '6 min read',
  },
  {
    title: 'Remote Work Revolution: Best Practices for 2026',
    summary:
      'As remote work becomes the norm, discover the tools, techniques, and mindset shifts needed to thrive in a distributed work environment.',
    content: `The office as we knew it is gone. Remote work has moved from a pandemic necessity to a permanent fixture of modern professional life. But thriving in a remote environment requires a fundamentally different approach.

**Setting Up Your Space**
Your environment sends signals to your brain. A dedicated workspace — even a specific chair — helps your brain shift into work mode. Invest in good lighting, a comfortable chair, and a reliable internet connection. These are not luxuries; they are tools.

**Asynchronous Communication**
The most productive remote teams default to async communication. Not every question needs an immediate answer. Tools like Notion, Loom, and Slack make it easy to communicate clearly without interrupting flow states.

**Over-Communicate Intentionally**
In an office, you absorb information passively — overhearing conversations, seeing colleagues' body language. Remote work strips all of that away. The solution is deliberate, proactive communication. Share your progress, blockers, and plans openly and frequently.

**Managing Energy, Not Just Time**
Remote work blurs the line between professional and personal life. The most sustainable remote workers protect their energy through clear working hours, regular breaks, and deliberate end-of-day rituals that signal the workday is over.

**Building Culture Remotely**
Culture does not happen by accident in a distributed team. It must be intentionally cultivated through virtual rituals, transparent values, and genuine investment in relationships beyond tasks and deadlines.`,
    category: 'Business',
    tags: ['Remote Work', 'Productivity', 'Work Life Balance'],
    featured: true,
    readTime: '7 min read',
  },
  {
    title: 'Mindfulness in the Digital Age: Finding Balance',
    summary:
      'In our hyperconnected world, learn how to maintain mental clarity and emotional well-being through mindfulness practices and digital detox strategies.',
    content: `We carry the entire world in our pockets. News, notifications, messages — an unending stream of information competes for every waking moment of our attention. The result is a mental landscape of constant distraction and chronic stress.

**What Mindfulness Actually Is**
Mindfulness is not about emptying your mind. It is about paying deliberate, non-judgmental attention to the present moment. It is noticing when your attention has wandered and gently bringing it back — again and again, without frustration.

**The Digital Attention Economy**
Every app, platform, and notification is engineered to capture and hold your attention as long as possible. Recognizing this is not paranoia; it is an essential first step to reclaiming agency over your own focus.

**Practical Digital Boundaries**
Start with a few simple rules: no phone for the first 30 minutes after waking, no screens for an hour before bed, notifications off except for essential contacts. These small changes can dramatically reduce baseline anxiety.

**Micro-Mindfulness Throughout the Day**
You do not need a 30-minute meditation practice to benefit from mindfulness. Three deep breaths before a meeting. Eating lunch without a screen. A 5-minute walk with no podcasts. These micro-moments accumulate into a calmer, more focused mind.

**The Offline Advantage**
The most creative, strategic thinking rarely happens online. Our best ideas tend to emerge in the shower, on a walk, or during quiet moments away from screens. Protecting offline time is not a retreat from productivity — it is the foundation of it.`,
    category: 'Lifestyle',
    tags: ['Mindfulness', 'Mental Health', 'Digital Wellness'],
    featured: false,
    readTime: '5 min read',
  },
  {
    title: 'Smart Investing for Beginners: Building Wealth in 2026',
    summary:
      'A beginner-friendly guide to building wealth through smart investment habits. Learn where to start, what to avoid, and how to think long-term.',
    content: `The best time to start investing was yesterday. The second best time is today. Whether you have ₹500 or ₹50,000 to start, the principles of smart investing remain the same.

**Why Investing Beats Saving**
Money sitting in a savings account loses value over time due to inflation. Investing puts your money to work so it grows faster than inflation — building real wealth over time through the power of compound interest.

**Start With an Emergency Fund**
Before investing a single rupee in markets, build an emergency fund covering 3–6 months of expenses. This is your financial foundation — the safety net that prevents you from selling investments at a loss when life throws surprises.

**Index Funds: The Beginner's Best Friend**
Instead of picking individual stocks, index funds give you exposure to an entire market. They are diversified, low-cost, and historically outperform the majority of actively managed funds over the long term. Start here.

**The 80/20 of Personal Finance**
Spend less than you earn. Invest the difference consistently. Avoid lifestyle inflation as income grows. These three principles account for 80% of long-term financial success. Everything else is noise.

**The Psychology of Investing**
The biggest enemy of returns is not the market — it is our own behavior. Panic selling during downturns and chasing trends during euphoria are how investors destroy wealth. The solution is a simple, rules-based strategy you can stick to through both crashes and bull runs.

Time in the market always beats timing the market.`,
    category: 'Finance',
    tags: ['Investing', 'Personal Finance', 'Wealth'],
    featured: false,
    readTime: '6 min read',
  },
  {
    title: 'The Art of Storytelling: Why Every Brand Needs a Narrative',
    summary:
      'Stories are the most powerful communication tool humans have ever invented. Discover how great brands use narrative to build loyalty, trust, and growth.',
    content: `Humans are wired for stories. Long before writing existed, we transmitted knowledge, values, and identity through narrative. Today, the brands that win are not the ones with the best products — they are the ones with the most compelling stories.

**Why Stories Work**
When we hear a story, our brains don't just process language — they simulate the experience. Neurons fire as if we are living the events ourselves. This is why a well-told story can change minds and behavior in ways that statistics and features never can.

**The Hero's Journey in Marketing**
The most resonant brand stories follow a timeless structure: a hero (your customer) faces a challenge, encounters a guide (your brand), follows a plan, and achieves transformation. When you position your brand as the guide — not the hero — you make your customer the center of the story.

**Authenticity Over Perfection**
Audiences today have finely tuned BS detectors. Polished, corporate-speak storytelling falls flat. Vulnerability, honesty, and imperfection are what create genuine connection. The most powerful brand stories often begin with failure.

**Consistency Across Every Touchpoint**
Your story is not just your tagline or your about page. It is every piece of content, every customer interaction, every product decision. Consistency between what you say and what you do is the foundation of trust.

**Start With Why**
As Simon Sinek famously articulated: people don't buy what you do, they buy why you do it. Clarity of purpose is the most powerful differentiator in a crowded market. Find your why, express it honestly, and build everything around it.`,
    category: 'Business',
    tags: ['Marketing', 'Branding', 'Storytelling'],
    featured: true,
    readTime: '7 min read',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅  Connected to MongoDB');

    // Find or create admin user
    let admin = await User.findOne({ email: 'admin@wordvibe.com' });
    if (!admin) {
      admin = await User.create({
        name: 'WordVibe Admin',
        email: 'admin@wordvibe.com',
        password: 'WordVibe2026',
      });
      console.log('✅  Admin user created');
    } else {
      console.log('ℹ️   Admin user already exists');
    }

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('🗑️   Cleared existing blogs');

    // Insert seed blogs
    const blogsWithAuthor = blogs.map((b) => ({
      ...b,
      author: admin._id,
      authorName: admin.name,
    }));

    const inserted = await Blog.insertMany(blogsWithAuthor);
    console.log(`✅  Seeded ${inserted.length} blog posts`);

    console.log('\n🎉  Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌  Seed failed:', err.message);
    process.exit(1);
  }
}

seed();
