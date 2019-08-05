---
layout:     post
title:      Instagram - Download photos and videos from a public profile
date:       2019-08-04
summary:    Instagram Media Downloader is a simple command-line script to download photos, videos and sidecars (album) of an Instagram profile. No configuration or password required.
categories: python instagram
permalink:  /instagram-download-photos-and-videos-from-a-public-profile/
---

[Instagram Media Downloader](https://github.com/saikiransripada/instagram-media-downloader){:target="_blank"} is a simple command-line script to download photos, videos and sidecars (album) of an Instagram profile. No configuration or password required.

### Requirements
- Python 3.x

### Usage
1. Clone the repo to your computer.
2. Install the required packages using `pip3 install -r requirements.txt`
3. Run the script using the command `python3 instagram.py -u <instagram_username> -p <path_to_download>`

The path parameter is optional. Specify the path if you want to save the media in a specific location. If omitted, it downloads the media to the current working directory.

Please feel free to fork and file issues or create pull requests.
[https://github.com/saikiransripada/instagram-media-downloader](https://github.com/saikiransripada/instagram-media-downloader){:target="_blank"}
