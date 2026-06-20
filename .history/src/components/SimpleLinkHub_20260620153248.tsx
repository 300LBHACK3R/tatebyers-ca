function getCollectionHref(collection: LinkCollection) {
  return collection.primaryHref ?? collection.links[0]?.href ?? "mailto:tatebyers06@gmail.com";
}

function getPrimaryButtonLabel(collection: LinkCollection) {
  const primaryHref = getCollectionHref(collection);

  if (primaryHref.startsWith("mailto:")) {
    return "Contact";
  }

  const websiteLink = collection.links.find((link) =>
    link.title.toLowerCase().includes("website"),
  );

  return websiteLink ? "Website" : "Open";
}