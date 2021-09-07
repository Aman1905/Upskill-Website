import aws from "../../images/aws.png"
import awsContainers from "../../images/awsContainers.png"
import blockchain from "../../images/blockchain.jpeg"
import docker from "../../images/docker.png"
import github from "../../images/github.jpeg"
import mlsa from "../../images/mlsa.png"

const BlogData = [
    {
        id : 1,
        name: "Containers in AWS",
        desc: "A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.",
        visit: "https://medium.com/nerd-for-tech/containers-in-aws-amazon-web-services-fcc329342135",
        imgsrc: awsContainers
    },

    {
        id : 2,
        name: "Git and GitHub — Beginner’s Guide : A Hands-on Approach.",
        desc: "Git is a free DVCS to work with several developers on the Linux kernel for tracking changes in any set of files, collaboratively developing source code during software development.",
        visit: "https://medium.com/nerd-for-tech/git-and-github-beginners-guide-a-hands-on-approach-e97e9489a017",
        imgsrc: github
    },

    {
        id : 3,
        name: "Blockchain — Understanding Its Uses and Implications",
        desc: "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.",
        visit: "https://medium.com/nerd-for-tech/blockchain-understanding-its-uses-and-implications-162b6d1cffd5",
        imgsrc: blockchain
    },

    {
        id : 4,
        name: "Docker — A beginner’s guide.",
        desc: "Docker is an Open Source Centralized PaaS (Platform as a Service) that uses O.S. level virtualization to create, deploy and run applications in packages known as Containers.",
        visit: "https://amanchopra-atg.medium.com/docker-a-beginners-guide-338f20f5f113",
        imgsrc: docker
    },

    {
        id : 5,
        name: "Microsoft Learn Student Ambassador",
        desc: "MLSA program is specially made for student developers where they learn on the trending technologies using the resources provided by the Microsoft and then educate their fellow students using the same.",
        visit: "{https://amanchopra-atg.medium.com/microsoft-learn-student-ambassador-63298dc85e86}",
        imgsrc: mlsa
    },

    {
        id : 6,
        name: "Ultimate guide or brief of AWS(Amazon Web Services)",
        desc: "AWS is a secure cloud service platform that offers its customers a wide range of services like compute power, database storage, content delivery and other functionality to help in growing a business.",
        visit: "https://amanchopra-atg.medium.com/aws-amazon-web-services-41fc7e59fc27",
        imgsrc: aws
    }
]

export default BlogData