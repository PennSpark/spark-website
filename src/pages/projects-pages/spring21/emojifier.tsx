import ProjectLayout from "../ProjectLayout";
import type { ProjectSection } from "../ProjectLayout";
import { projectByKey } from "../../../data/allProjects";

import emojifierImg from "../../../../public/project-images/sp21/emojifier-header.webp";

export const pageKey = "/spring21/emojifier";

const project = projectByKey[pageKey];
if (!project) {
  throw new Error(`Project not found in projectByKey for pageKey: ${pageKey}`);
}

const demoVisuals = [
  <img key="d1" src={emojifierImg} style={{ width: "100%" }} />,
];

const sections: ProjectSection[] = [
  {
    title: "Background",
    content: [
      "Our project is a website that uses machine learning to classify the facial expressions in a photo into one of 4 emotions: happy, sad, neutral, or angry. We used Flask to create the web application portion and Tensorflow for the machine learning portion.",
    ],
  },
  {
    title: "Timeline",
    content: [
      "Our project had three major milestones, detailed below:",
      <br key="t1" />,
      <br key="t2" />,
      <strong key="t3">Milestone 1</strong>,
      <ul key="t4">
        <li>Finalize designs and prototypes for website.</li>
        <li>Develop basic frontend of website.</li>
        <li>
          Learn the basics of what machine learning is, as long as the major
          steps that go into image classification.
        </li>
        <li>Find emotion identifying datasets to train model on.</li>
      </ul>,
      <strong key="t5">Milestone 2</strong>,
      <ul key="t6">
        <li>Feature to upload and display images on the website.</li>
        <li>
          Ability to pre-process images to identify face, crop image, and resize
          to correct dimensions.
        </li>
        <li>
          Train machine learning model that reliably classifies the right
          emotions based off an image.
        </li>
      </ul>,
      <strong key="t7">Final Milestone:</strong>,
      <br key="t8" />,
      <ul key="t9">
        <li>Integrate classification model onto the website.</li>
        <li>
          Final polishes, including final design touches and improving
          classification accuracy.
        </li>
      </ul>,
    ],
  },
  {
    title: "Challenges",
    content: [
      "Our team faced several challenges during the machine learning portion of our project. Firstly, it was a challenge to bring up the accuracy of our machine learning classification accuracy rate, since our dataset’s resolution was too small (48x48). Secondly, overfitting was also an issue since our dataset was too small. We were able to partially solve this by randomly rotating and flipping images before training them, but it still affected the final accuracy.",
      <br key="c1" />,
      <br key="c2" />,
      "We also ran into several small issues that stalled our progress in development while working out the frontend of our application. Working with Flask for the first time was a challenge for us as we tried to figure out Flask-specific details to file structures such as where to place all our static files. Getting used to Git, integrating the web application with the machine learning portion, and working with OpenCV for the first time also posed a challenge for us. While trying to integrate the webcam OpenCV,  we ran into the problem of circular dependency between our files that we couldn’t quite wrap our head around. We ended up leaving out the webcam portion, but this is something we would like to figure out with more time.",
    ],
  },
  {
    title: "Takeaways",
    content: [
      <strong key="ta1">
        Full-Stack Developers (Acelyn Choi, Subin Kim, Shelly Wu)
      </strong>,
      ": Although we ran into many challenges with using Flask, it was a valuable learning experience, especially since all of us were unfamiliar with the framework. We were familiar with HTML and CSS, but using them with Flask was slightly different, which required us to dive deeper into how Flask works and learn more about it. We also learned the shortcut to a hard reload (Ctrl+Shift+R) that solved our problem of browser caching.",
      <br key="ta2" />,
      <br key="ta3" />,
      <strong key="ta4">ML Developers (Aditya Gupta, Aarushi Singh)</strong>,
      ": We learned that machine learning isn’t too hard to set up but is very hard to master - there were a lot of parameters and each one had an effect on the final accuracy. The structure of the model, the number of classes used, the quality of the dataset, and the time taken to train were all factors that we had to consider in training the model.",
    ],
  },
  {
    title: "Looking Forward",
    content: [
      "Looking forward, there are several improvements we could make to our project:",
      <br key="lf1" />,
      <br key="lf2" />,
      "Firstly, our final accuracy could have been improved by training on a larger dataset next time. Additionally, we could look into working with with distributed big data frameworks such as Spark. Finally, we could integrate Amazon s3 and cloud storage to handle larger datasets to work with.",
    ],
  },
];

export default function EmojifierPage() {
  return (
    <ProjectLayout
      project={project}
      demoUrl=""
      sourcecodeUrl="https://github.com/PennCreativeLabs/sp21-emojifier"
      demoVisuals={demoVisuals}
      sections={sections}
    />
  );
}
