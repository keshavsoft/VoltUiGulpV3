const StartFunc = () => {
  const newImageName = localStorage.getItem("Image"); // ex: profile-picture-5.jpg
  if (!newImageName) return;

  const img = document.getElementById("profileImage");
  if (!img || !img.src) return;

  // Get base path from existing src
  const currentUrl = img.src;
  const baseUrl = currentUrl.substring(
    0,
    currentUrl.lastIndexOf("/") + 1
  );

  // Replace only image name
  img.src = `${baseUrl}${newImageName}`;
};

export { StartFunc };
