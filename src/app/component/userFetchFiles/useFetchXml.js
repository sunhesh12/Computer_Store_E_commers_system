import { useEffect, useState } from "react";
import { parseString } from "xml2js";

// Custom hook to fetch and parse XML data
const useFetchXml = (xmlPath) => {

const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchXml = async () => {
      try {
        const response = await fetch(xmlPath);
        const xmlData = await response.text();
        parseString(xmlData, (err, result) => {
          if (err) {
            setError("Error parsing XML");
            setLoading(false);
          } else {
            setData(result.products.product.map((product) => ({
              src: product.src[0],
              model: product.model[0],
              type: product.type[0],
              prize: product.prize[0],
            })));
            setLoading(false);
          }
        });
      } catch (error) {
        setError("Error fetching XML");
        setLoading(false);
      }
    };

    fetchXml();
  }, [xmlPath]);

  return { data, loading, error };
};

export default useFetchXml;
