const articles = {
  "article-one": {
    date: "21 JULY 2026",
    title: "Sleepless nights watching the beautiful game",
    paragraphs: [
      "The FIFA World Cup just ended. Before this tournament, I barely knew football. I knew four names: Messi, Ronaldo, Neymar and Mbappé. I had played in the backyard with my brothers, just kicking a ball around, but I had never followed a real tournament. It turned out to be a completely different thing.",
      "At first, I didn't even have a team. Argentina had won last time, so I thought maybe someone else deserved a turn. Then Messi scored a hat-trick against Algeria, and that was it. I became his fan, and that made me an Argentina fan too.",
      "The timing was perfect. My fourth semester had just ended, and June and July were free. I had an internship, but it was work from home. I have always loved live sports, whether it's cricket, the Olympics or anything else. That feeling that anything can happen never gets old.",
      "I'm usually a morning person. But during the World Cup, my sleep schedule fell apart. The whole house would be asleep, and I would be wide awake, watching the match. Now that it's over, I'm slowly going back to my morning routine.",
      "Some matches I loved more than others. Argentina vs Egypt in the Round of 16 was my favorite. Argentina had most of the ball, but Egypt scored first and were leading 2–0 in the second half. Argentina looked close to going home. But then they scored three goals in the last few minutes and won 3–2. I was almost shouting at my screen, and I'm glad nobody in the house woke up.",
      "Argentina then beat Switzerland 3–1 in the quarterfinal and faced England in the semi-final on July 15 and Argentina won 2–1 to reach the final. By then, I was fully hooked.",
      "Then came the final. It was also a beautiful game, but it felt predictable to me. From the start, I had a feeling Spain would win. At one point, I even fell asleep on the sofa and woke up about half an hour later and continued watching. It's not my proudest fan moment, but it happened. This may be last world cup of Messi, Ronaldo, Neymar. I have just started watching football and it feels like greatest chapter of the game is closing right as i arrived..."
    ]
  },
  "article-two": {
    date: "30 JUNE 2026",
    title: "From Memorizing Code to Solving Problems",
    paragraphs: [
      "In my first year, I learned C. Like most beginners, I was just trying to get the syntax right, write programs, and see the expected output on the screen.",
      "In the second semester, we got Data Structures and Algorithms in C. Linked lists, stacks, queues, the usual. But honestly, the way I studied them back then was very different from how I do it now. Before the viva, I would learn the entire code for each data structure, start to finish. I knew the teacher would only ask what he had covered in class, so I prepared exactly that. But I wasn’t really solving problems. I was just remembering code.",
      "Then I bought a DSA course in Java and actually began following it seriously. This time I was solving problems for real. I assumed arrays would be the easiest topic. I mean, how hard could they be? Turns out, pretty hard. I would sit with a problem for 30 minutes, understand what it was asking, and still have no clue how to start. Sometimes I’d finally give in and look at the solution, and think, “Oh, that was so simple. Why didn’t I think of that?” Other times I’d realize I had been going at the whole problem the wrong way from the start. That’s when something clicked. Writing code and solving a problem with code are two very different things.",
      "I’ve always thought of logical reasoning, aptitude, and problem-solving as my strong areas. Even as a kid, these things came easily to me. But being naturally good at them doesn’t automatically make you good at programming problems. There’s another level of thinking involved. You have to understand the problem, figure out what actually needs solving, break it into smaller parts, come up with a few possible approaches, and only then think about how to implement one. Slowly, I stopped stressing about remembering syntax. Even today, I don’t remember every method or implementation by heart. Most of the time I start with pseudocode. DSA also taught me patience, which is funny, because I’m not a patient person at all. I’m a movie person, not a series person. I can’t sit through multiple seasons. Even in chess, I sometimes just want to skip ahead to the endgame. Yet DSA made me stay with one problem for 30 minutes, sometimes even longer. Sometimes you try a different approach. Sometimes you step back for a bit. And sometimes you just have to stay with the problem a little longer..."
    ]
  },
  "article-three": {
    date: "09 NOVEMBER 2026",
    title: "A few books worth checking out",
    paragraphs: [
      "1. How to Win Friends and Influence People",
      "If you are about to start college, I would especially recommend this one. I have read this book four or five times now. Every time I read it again, I notice something I missed before.",
      "This book suggests that criticism only makes people defensive, so it is better to avoid complaining and to give honest appreciation when you truly mean it. It also says that the easiest way to connect with someone is to talk about the things they care about.",
      "2. The Midnight Library",
      "This one is my personal favourite. The Midnight Library is a beautiful story about life, choices, regrets, and second chances. It tells the story of Nora, a girl who gets a chance to see how her life could have been if she had made different choices. She visits a strange library where every book shows a different version of her life. As she explores these lives, she slowly learns that no life is perfect.",
      "3. Atomic Habits",
      "This book suggests: you don’t rise to the level of your goals; you fall to the level of your habits. My favourite idea was about identity. Instead of saying “I want to read more books,” say “I am a reader.” When you see yourself as a certain kind of person, your actions slowly follow. I also loved the idea of getting just 1% better every day.",
      "4. The Alchemist",
      "This is just a story I loved. It is simply a beautiful story about a shepherd boy named Santiago who leaves everything behind to follow a dream about treasure near the Egyptian pyramids.",
      "I will not spoil the ending, but what stayed with me was the realization that the journey changes him far more than the treasure ever could.",
      "5. The Power of Your Subconscious Mind",
      "The Power of Your Subconscious Mind taught me that the thoughts I repeat to myself slowly become my beliefs, and my beliefs shape my actions. It made me more careful about how I talk to myself, especially on bad days."
    ]
  }
};

const modal = document.getElementById("article-modal");

if (modal) {
  const modalTitle = document.getElementById("modal-title");
  const modalDate = document.getElementById("modal-date");
  const modalContent = document.getElementById("modal-content");

  function openArticle(id) {
    const article = articles[id];
    if (!article) return;
    modalDate.textContent = article.date;
    modalTitle.textContent = article.title;
    modalContent.replaceChildren(...article.paragraphs.map(text => {
      const p = document.createElement("p");
      p.textContent = text;
      return p;
    }));
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-panel").scrollTop = 0;
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".read-button").forEach(button => {
    button.addEventListener("click", () => openArticle(button.dataset.article));
  });
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  // Direct links like articles.html#article-one open that article
  const hashId = location.hash.slice(1);
  if (articles[hashId]) openArticle(hashId);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
