import { ScrollShadow } from "@nextui-org/react";
import { link } from "fs";

const ReadingListSection = () => {
  const readingList = [
    {
      title: "Grokkin Algorithms",
      author: "Aditya Bhargava",
      note: "Great book for beginners to learn algorithms",
      link: "https://www.manning.com/books/grokking-algorithms",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      note: "A must-read for every developer",
      link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    },
    {
      title: "Domain Driven Design Quickly",
      author: "Abel Avram & Floyd Marinescu",
      note: "A quick guide to DDD",
      link: "https://www.infoq.com/minibooks/domain-driven-design-quickly/",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      note: "Great book to build good habits",
      link: "https://jamesclear.com/atomic-habits",
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      note: "A great fantasy novel",
      link: "https://www.amazon.com/Name-Wind-Kingkiller-Chronicle/dp/0756404746",
    },
  ];

  return (
    <section id="readingList" className="mx-auto max-w-6xl">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="list-container flex flex-col min-h-[600px] items-center space-y-10 mt-12 justify-start md:flex-flow md:text-left">
          <div className="w-full md:w-2/3 px-4">
            <p>
              These are the books I have read or pending to read. I would like
              to share my learning process with everyone so feel free to click
              on them
            </p>
          </div>
          <ScrollShadow className="flex flex-col w-[300px] h-[400px] md:w-[500px] items-center" hideScrollBar>
            <ul className="flex-grow">
              {readingList.map((book, index) => (
                <li key={index} className="text-xl font-bold text-center p-4">
                  <h2 className="text-2xl font-bold text-center border-b-2 border-gray-500">
                    <a href={book.link} target="_blank">
                      {book.title}
                    </a>
                  </h2>
                  <p className="text-md pt-2">
                    Author:
                    <span style={{ color: "#d66853" }}>
                      {" "}
                      {book.author}
                    </span>{" "}
                  </p>
                  <p className="text-sm">
                    Note:<span className="italic"> {book.note}</span>
                  </p>
                </li>
              ))}
            </ul>
          </ScrollShadow>
        </div>
      </div>
    </section>
  );
};

export default ReadingListSection;
