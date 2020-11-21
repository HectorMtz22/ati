from PIL import Image
# My image is a 200x374 jpeg that is 102kb large
foo = Image.open("./banner/banner-1.jpg")
foo.size
(1920, 1280)
# I downsize the image with an ANTIALIAS filter (gives the highest quality)
foo = foo.resize((1920, 1280), Image.ANTIALIAS)
foo.save("./banner/banner-1-masquality.jpg", quality=95)
# The saved downsized image size is 24.8kb
foo.save("./banner/banner-1-menosquality.jpg", optimize=True, quality=95)
# The saved downsized image size is 22.9kb
