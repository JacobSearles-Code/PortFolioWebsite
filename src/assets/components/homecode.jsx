import { useEffect, useState } from "react";

export default function CodeWindow() {
    const lines = [
        "const developer = {",
        '  name: "Jacob Searles",',
        '  role: "Software Developer",',
        '  skills: [',
        '    "React",',
        '    "JavaScript",',
        '    "Java",',
        '    "C#",',
        '    "C++",',
        "  ]",
        "};",
        "",
        "> npm run dev"
    ];

    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let full = lines.join("\n");
        let i = 0;

        const interval = setInterval(() => {
            setDisplayed(full.slice(0, i));
            i++;

            if (i > full.length)
                clearInterval(interval);

        }, 25);

        return () => clearInterval(interval);
    }, []);

    return (
        <pre className="codeWindow">
            {displayed}
            <span className="cursor">█</span>
        </pre>
    );
}