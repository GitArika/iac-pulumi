import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as docker from "@pulumi/docker-build";

const { repository } = new awsx.ecr.Repository("deploy-ecr-repo");

const { userName, password } = aws.ecr.getAuthorizationTokenOutput({
  registryId: repository.registryId,
});

const image = new docker.Image("deploy-docker-image", {
  context: {
    location: "../",
  },
  platforms: ["linux/amd64"],
  push: true,
  registries: [
    {
      address: repository.repositoryUrl,
      username: userName,
      password,
    },
  ],
  tags: [pulumi.interpolate`${repository.repositoryUrl}:latest`],
});
