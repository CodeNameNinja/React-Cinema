provider "aws" {
  region = "af-south-1"
}

terraform {
  backend "s3" {
    bucket  = "ninja-cinema-tf-backend"
    key     = "app-cinema.tfstate"
    region  = "af-south-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Mitchell Yuen"
  }

}
