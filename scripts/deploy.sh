#!/bin/bash
# set -e # exit with nonzero exit code if anything fails

mkdir -p ~/.leancloud
echo "{\"$LC_APP_ID\":{\"masterKey\":\"$LC_APP_MASTER_KEY\",\"appKey\":\"$LC_APP_KEY\"}}" > ~/.leancloud/app_keys
cat ~/.leancloud/app_keys
avoscloud add cccc_ci $LC_APP_ID
avoscloud deploy -g
