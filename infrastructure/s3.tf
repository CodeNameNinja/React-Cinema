###################################
# S3 Resources
###################################

resource "aws_s3_bucket" "cinema_app_s3_bucket" {
  bucket        = "${local.prefix}-app"
  acl           = "public-read"
  force_destroy = true

  policy = <<POLICY
    {
        "Version": "2012-10-17",
        "Statement": [
            {
            "Sid": "PublicReadGetObject",
            "Action": "s3:GetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Resource": "arn:aws:s3:::${local.prefix}-app/*"
            }
        ]
    }
    POLICY

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
  versioning {
    enabled = true
  }
  tags = local.common_tags
}
