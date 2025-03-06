// import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

const repository = new awsx.ecr.Repository("deploy-ecr-repo");
