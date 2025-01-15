"use client";

import { PinContainer } from "./ui/Pin";

const Technologies = () => {
  const technologiesData = [
    {
      id: 1,
      name: "Python",
      img: "/python.svg", // Replace with the path to Python logo
      nameImg: "/pythonName.svg", // Replace with the path to Python name logo
    },
    {
      id: 2,
      name: "PyTorch",
      img: "/pytorch.svg", // Replace with the path to PyTorch logo
      nameImg: "/pytorchName.svg", // Replace with the path to PyTorch name logo
    },
    {
      id: 3,
      name: "TensorFlow",
      img: "/tensorflow.svg", // Replace with the path to TensorFlow logo
      nameImg: "/tensorflowName.svg", // Replace with the path to TensorFlow name logo
    },
    {
      id: 4,
      name: "Hugging Face",
      img: "/huggingface.svg", // Replace with the path to Hugging Face logo
      nameImg: "/huggingfaceName.svg", // Replace with the path to Hugging Face name logo
    },
    {
      id: 5,
      name: "LangChain",
      img: "/langchain.svg", // Replace with the path to LangChain logo
      nameImg: "/langchainName.svg", // Replace with the path to LangChain name logo
    },
    {
      id: 6,
      name: "OpenAI",
      img: "/openai.svg", // Replace with the path to OpenAI logo
      nameImg: "/openaiName.svg", // Replace with the path to OpenAI name logo
    },
    {
      id: 7,
      name: "MLflow",
      img: "/mlflow.svg", // Replace with the path to MLflow logo
      nameImg: "/mlflowName.svg", // Replace with the path to MLflow name logo
    },
    {
      id: 8,
      name: "NumPy",
      img: "/numpy.svg", // Replace with the path to NumPy logo
      nameImg: "/numpyName.svg", // Replace with the path to NumPy name logo
    },
    {
      id: 9,
      name: "Pandas",
      img: "/pandas.svg", // Replace with the path to Pandas logo
      nameImg: "/pandasName.svg", // Replace with the path to Pandas name logo
    },
    {
      id: 10,
      name: "Docker",
      img: "/docker.svg", // Replace with the path to Docker logo
      nameImg: "/dockerName.svg", // Replace with the path to Docker name logo
    },
    {
      id: 11,
      name: "AWS",
      img: "/aws.svg", // Replace with the path to AWS logo
      nameImg: "/awsName.svg", // Replace with the path to AWS name logo
    },
    {
      id: 12,
      name: "Power BI",
      img: "/powerbi.svg", // Replace with the path to Power BI logo
      nameImg: "/powerbiName.svg", // Replace with the path to Power BI name logo
    },
    {
      id: 13,
      name: "MongoDB",
      img: "/mongodb.svg", // Replace with the path to MongoDB logo
      nameImg: "/mongodbName.svg", // Replace with the path to MongoDB name logo
    },
    {
      id: 14,
      name: "OpenCV",
      img: "/opencv.svg", // Replace with the path to OpenCV logo
      nameImg: "/opencvName.svg", // Replace with the path to OpenCV name logo
    },
    {
      id: 15,
      name: "Apache Airflow",
      img: "/airflow.svg", // Replace with the path to Apache Airflow logo
      nameImg: "/airflowName.svg", // Replace with the path to Apache Airflow name logo
    },
    {
      id: 16,
      name: "Apache Kafka",
      img: "/kafka.svg", // Replace with the path to Apache Kafka logo
      nameImg: "/kafkaName.svg", // Replace with the path to Apache Kafka name logo
    },
    {
      id: 17,
      name: "Microsoft SQL Server",
      img: "/sqlserver.svg", // Replace with the path to Microsoft SQL Server logo
      nameImg: "/sqlserverName.svg", // Replace with the path to Microsoft SQL Server name logo
    },
    {
      id: 18,
      name: "Apache Spark",
      img: "/spark.svg", // Replace with the path to Apache Spark logo
      nameImg: "/sparkName.svg", // Replace with the path to Apache Spark name logo
    },
    {
      id: 19,
      name: "Ansible",
      img: "/ansible.svg", // Replace with the path to Ansible logo
      nameImg: "/ansibleName.svg", // Replace with the path to Ansible name logo
    },
    {
      id: 20,
      name: "Kubernetes",
      img: "/kubernetes.svg", // Replace with the path to Kubernetes logo
      nameImg: "/kubernetesName.svg", // Replace with the path to Kubernetes name logo
    },
    {
      id: 21,
      name: "Jenkins",
      img: "/jenkins.svg", // Replace with the path to Jenkins logo
      nameImg: "/jenkinsName.svg", // Replace with the path to Jenkins name logo
    },
    {
      id: 22,
      name: "NGINX",
      img: "/nginx.svg", // Replace with the path to NGINX logo
      nameImg: "/nginxName.svg", // Replace with the path to NGINX name logo
    },
    {
      id: 23,
      name: "Flutter",
      img: "/flutter.svg", // Replace with the path to Flutter logo
      nameImg: "/flutterName.svg", // Replace with the path to Flutter name logo
    },
    {
      id: 24,
      name: "Vue.js",
      img: "/vuejs.svg", // Replace with the path to Vue.js logo
      nameImg: "/vuejsName.svg", // Replace with the path to Vue.js name logo
    },
    {
      id: 25,
      name: "Laravel",
      img: "/laravel.svg", // Replace with the path to Laravel logo
      nameImg: "/laravelName.svg", // Replace with the path to Laravel name logo
    },
    {
      id: 26,
      name: "Node.js",
      img: "/nodejs.svg", // Replace with the path to Node.js logo
      nameImg: "/nodejsName.svg", // Replace with the path to Node.js name logo
    },
  ];

  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {technologiesData.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.name}
              href="#" // Add a link if you have one
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.name}
              </h1>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  <img
                    src={item.nameImg}
                    alt={item.name}
                    className="w-24 h-10"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
