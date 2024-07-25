"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { submatch, jediArchive, ProjectStructure } from "@/utils/projects";
import { FaGithub, FaPlusCircle } from "react-icons/fa";

const ProjectSection = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [project, setProject] = useState({} as ProjectStructure);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <section id="projects" className="mx-auto max-w-6xl">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="project-container flex flex-col min-h-[600px] items-center space-y-10 mt-12 justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="flex">
            <Card className="submatch-card lg:w-[300px] xl:min-h-[400px] py-4 bg-opacity-40 shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="text-xl font-bold text-center p-4">
                <h2 className="text-2xl font-bold text-center">
                  {submatch.title}
                </h2>
              </CardHeader>
              <CardBody className="overflow-visible p-4 items-center">
                <Image
                  src={submatch.picture}
                  alt="Submatch"
                  width={200}
                  height={200}
                />
              </CardBody>
              <CardFooter className="justify-center p-2 border-t border-gray-200">
                <Button
                  className="border border-gray-500 hover:bg-orange-700 w-[100px] bg-opacity-80 text-white font-bold rounded"
                  onClick={() => {
                    setIsClicked(true);
                    setProject(submatch);
                    onOpen();
                  }}
                  isIconOnly
                >
                  <FaPlusCircle />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex">
            <Card className="jedi-card py-4 bg-opacity-40 xl:min-h-[400px] lg:w-[300px] shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="text-xl font-bold text-center p-4">
                <h2 className="text-2xl font-bold text-center">
                  {jediArchive.title}
                </h2>
              </CardHeader>
              <CardBody className="overflow-visible p-4">
                <Image
                  src={jediArchive.picture}
                  alt="Submatch"
                  width={300}
                  height={300}
                />
              </CardBody>
              <CardFooter className="justify-center p-2 border-t border-gray-200">
                <Button
                  className="hover:bg-orange-700 w-[100px] border border-gray-500 text-white bg-opacity-80 font-bold rounded"
                  onClick={() => {
                    setIsClicked(true);
                    setProject(jediArchive);
                    onOpen();
                  }}
                  isIconOnly
                >
                  <FaPlusCircle />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        {isClicked && project && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" placement="center">
            <ModalContent className="p-6 bg-white rounded-lg shadow-xl">
              {(onClose) => (
                <>
                  <ModalHeader className="text-xl font-bold">
                    {project.title}
                  </ModalHeader>
                  <Divider className="mb-4" />
                  <p>{project.description}</p>
                  <br />
                  <p className="font-semibold">Tech Stack used:</p>
                  <br />
                  <ul className="ml-4 mb-4">
                    {project.techStack.map((tech, index) => (
                      <>
                        <li key={index} className="mb-1">
                          &bull; {tech}
                        </li>
                      </>
                    ))}
                  </ul>
                  <Divider className="mb-2" />
                  <div className="flex items-center justify-between py-2">
                    <Button
                      onPress={onClose}
                      onClick={() => setProject({} as ProjectStructure)}
                      color="danger"
                    >
                      Close
                    </Button>
                    <div className="">
                      <Button
                        onClick={() => window.open(project.github)}
                        className="text-white font-bold rounded"
                        color="warning"
                      >
                        Go to the code <FaGithub />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
