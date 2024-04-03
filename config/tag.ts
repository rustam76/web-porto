export const tagColor = (tag: string) => {

    const up = tag.toLowerCase();

    const color: any= {
        "flutter": "bg-slate-300",
        "react native": "bg-slate-300",
        "reactjs": "from-[#5EA2EF] to-[#0072F5]",
        "nextjs": "from-[#5EA2EF] to-[#0072F5]",
        "codeigniter": "from-[#FF72E1] to-[#F54C7A]",
        "laravel": "from-[#FF72E1] to-[#F54C7A]",
    }
    // console.log(color[tag]);
    
    return color[up]
}