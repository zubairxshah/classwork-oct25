const CodeBlock = ({ code }: { code: string }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <code className="text-sm font-mono text-gray-800">{code}</code>
    </pre>
  );

const codeSnippet = `
  const [increment, setIncrement] = useState(0);
  const [name, setName] = useState("");
  const updateIncrement = () => setIncrement(increment + 1);
  
  useEffect(() => {
    const fetchData = async () => {
      const dataFetched = await fetch(
        "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=2"
      );
      const res = await dataFetched.json();
      setName(\`\${res.data[0].firstname} \${res.data[0].lastname}\`);
    };
    fetchData();
  }, [increment]);
    `.trim();

    export {codeSnippet, CodeBlock}