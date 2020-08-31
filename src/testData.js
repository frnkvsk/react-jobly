let companies = [
  {
    handle: 'company-abc',
    name: 'Anderson, Arias And Morrow',
    num_employees: 1022,
    description: 'Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.',
    logo_url: 'default_logo.jpg',
  },
  {
    handle: 'edwards-lee-and-reese', 
    name: 'Edwards, Lee and Reese', 
    num_employees: 744, 
    description: 'To much recent it reality coach decision Mr. Dog language evidence minute either deep situation pattern. Other cold bad loss surface real show.', 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg'
    			
  },
  {
    handle: 'sellers-bryant', 
    name: 'Sellers-Bryant', 
    num_employees: 369, 
    description: 'Language discussion mission soon wait according executive. Financial say husband anyone money politics. Dinner action purpose mouth environment I white.', 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg'
    				
  },
  {
    handle: 'bauer-gallagher', 
    name: 'Bauer-Gallagher', 
    num_employees: 862, 
    description: `Difficult ready trip question produce produce someone.	
    arnold-berger-and-townsend	Arnold, Berger and Townsend	795	Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.	
    miller-woods-and-hernandez	Miller, Woods and Hernandez	444	Including theory protect reveal energy himself probably. Test leave mother area however.`, 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg'
  },
  {
    handle: 'davis-davis', 
    name: 'Davis-Davis', 
    num_employees: 23, 
    description: 'Career participant difficult. Decide claim particular century society. Question growth two staff.', 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg'
  },
  {
    handle: 'jackson-and-sons', 
    name: 'Jackson and Sons', 
    num_employees: 649, 
    description: `President couple political sit create.	
    smith-llc	Smith LLC	908	Statement use per mission method. Order truth method.	
    humphrey-llc	Humphrey LLC	678	Agent actually able paper nor. Tell then court full agree without assume.	
    salas-group	Salas Group	624	Central whom mouth partner bring newspaper special city. Show second cost newspaper can early play.	
    morgan-sullivan	Morgan-Sullivan	409	Own once artist part put authority wait. Focus free even. Why friend civil visit.`, 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg'
  },
  {
    handle: 'perez-miller',
    name: 'Perez-Miller', 
    num_employees: 298, 
    description: `Space one approach wife son. Themselves give necessary follow employee return feel. Step animal doctor sign water early.	
    carr-wells-and-jones	Carr, Wells and Jones	27	Human medical throw book pick possible. Maybe yeah word beat treatment impact campaign.`, 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg'
  },
  {
    handle: `thomas-and-sons`, 
    name: `Thomas and Sons`, 
    num_employees: 51, 
    description: `Book detail scene continue. Art strategy because list two.	
    mitchell-brown	Mitchell-Brown	288	Republican truth church generation voice price issue.	
    watson-davis	Watson-Davis	819	Year join loss.	
    logan-miller	Logan-Miller	429	Pattern hand where never. Social across ability which structure.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg`,    				
  },
  {
    handle: `taylor-yu-and-lee`, 
    name: `Taylor, Yu and Lee`, 
    num_employees: 226, 
    description: `Down bag serve. Officer season company.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg`,
    				
  },
  {
    handle: `hudson-inc`, 
    name: `Hudson Inc`, 
    num_employees: 627, 
    description: `End now meet staff. Long government force why bar. Provide bring hope staff almost many be a.	
    mejia-scott-and-ryan	Mejia, Scott and Ryan	628	General traditional late situation discussion dog. Before best up strategy about direction.	
    scott-smith	Scott-Smith	993	Room newspaper foot. Student daughter their themselves top almost near. Wait time recently it street follow medical nothing.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg`,    				
  },
  {
    handle: `norman-harvey`, 
    name: `Norman-Harvey`, 
    num_employees: 837, 
    description: `Drop along test material education. Opportunity forget campaign federal certainly total hair.	
    hall-mills	Hall-Mills	266	Change stage tell note hundred. Worry where program wait.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg`,    				
  },
  {
    handle: `gillespie-smith`, 
    name: `Gillespie-Smith`, 
    num_employees: 302, 
    description: `Candidate ability democratic make drug. Player themselves like front. Over through style loss win very when.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg`,
    				
  },
  {
    handle: `boyd-evans`, 
    name: `Boyd-Evans`, 
    num_employees: 698, 
    description: `Build respond generation tree. No five keep. Happy medical back fine focus suffer modern.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg`,
    				
  },
  {
    handle: `martinez-daniels`, 
    name: `Martinez-Daniels`, 
    num_employees: 12, 
    description: `Five source market nation. Drop foreign raise pass.	
    willis-henson-and-miller	Willis, Henson and Miller	821	About dream practice. Father significant senior health within four.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_arc.jpg`,    				
  },
  {
    handle: `wiggins-frederick-and-boyer`, 
    name: `Wiggins, Frederick and Boyer`, 
    num_employees: 298, 
    description: `Institution structure say argue bit. Each option high executive easy pattern. Majority white hour there reach drive produce.`, 
    logo_url: `http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg`,    				
  },
  {
    handle: 'stone-stewart', 
    name: 'Stone-Stewart', 
    num_employees: 459, 
    description: 'Req uire successful family but. Traditional article late eight lose common send budget. Better opportunity law country various represent strong probably.', 
    logo_url: 'http://www.gtdesigns.it/wp-content/uploads/OverusedLogos/99gen_circle.jpg',
  },
];

let jobs = [
  {
    id: 1, 
    title: 'Editor, magazine features', 
    salary: 118000, 
    equity: 0.149999999999999994, 
    company_handle: 'foster-rice'
  },				
  {
    id: 2, 
    title: 'Tree surgeon', 
    salary: 130000, 
    equity: 0.0800000000000000017, 
    company_handle: 'hall-davis'
  },				
  {
    id: 3, 
    title: 'Multimedia programmer', 
    salary: 154000, 
    equity: 0.0400000000000000008, 
    company_handle: 'owen-newton'
  },
  {
    id: 4, 
    title: 'Freight forwarder', 
    salary: 183000, 
    equity: 0.0899999999999999967, 
    company_handle: 'hudson-inc'
  },				
  {
    id: 5, 
    title: 'Applications developer', 
    salary: 84000, 
    equity: 0.0400000000000000008, 
    company_handle: 'sellers-bryant'
  },				
  {
    id: 6, 
    title: 'Sports development officer', 
    salary: 102000, 
    equity: 0.170000000000000012, 
    company_handle: 'scott-smith'
  },			
  {
    id: 7, 
    title: 'Clothing/textile technologist', 
    salary: 171000, 
    equity: 0.179999999999999993, 
    company_handle: 'smith-llc'
  },				
  {
    id: 8, 
    title: 'Secretary/administrator', 
    salary: 172000, 
    equity: 0.149999999999999994, 
    company_handle: 'jackson-and-sons'
  },				
  {
    id: 9, 
    title: 'Psychologist, occupational', 
    salary: 190000, 
    equity: 0.140000000000000013, 
    company_handle: 'robbins-marsh-and-martin'
  },				
  {
    id: 10, 
    title: 'Leisure centre manager', 
    salary: 135000, 
    equity: 0.0200000000000000004, 
    company_handle: 'edwards-lee-and-reese'
  },				
  {
    id: 11, 
    title: 'Best boy', 
    salary: 193000, 
    equity: 0.0599999999999999978, 
    company_handle: 'jackson-and-sons'
  },				
  {
    id: 12, 
    title: 'Field seismologist', 
    salary: 62000, 
    equity: 0.0800000000000000017, 
    company_handle: 'martinez-daniels'
  },				
  {
    id: 13, 
    title: 'Art gallery manager', 
    salary: 114000, 
    equity: 0.190000000000000002, 
    company_handle: 'anderson-arias-and-morrow'
  },				
  {
    id: 14, 
    title: 'Management consultant', 
    salary: 183000, 
    equity: 0.130000000000000004, 
    company_handle: 'edwards-lee-and-reese'
  },				
  {
    id: 15, 
    title: 'Ergonomist', 
    salary: 160000, 
    equity: 0.179999999999999993, 
    company_handle: 'bauer-gallagher'
  },				
  {
    id: 16, 
    title: 'Engineer, materials', 
    salary: 185000, 
    equity: 0.110000000000000001, 
    company_handle: 'garner-michael'
  },				
  {
    id: 17, 
    title: 'Race relations officer', 
    salary: 97000, 
    equity: 0.110000000000000001, 
    company_handle: 'bauer-gallagher'
  },
  {
    id: 18, 
    title: 'Engineering geologist', 
    salary: 89000, 
    equity: 0.190000000000000002, 
    company_handle: 'ayala-buchanan'
  },				
  {
    id: 19, 
    title: 'Aeronautical engineer', 
    salary: 135000, 
    equity: 0.0599999999999999978, 
    company_handle: 'norman-harvey'
  },				
  {
    id: 20, 
    title: 'Development worker, community', 
    salary: 192000, 
    equity: 0.0800000000000000017, 
    company_handle: 'weber-hernandez'
  },
        
  ]

  const user = {username: 'user1', password: 'user1password', first_name: 'Andy', last_name: 'Anderson', email: 'andy@andy.com', photo_url: 'https://images.unsplash.com/flagged/photo-1554176778-0319e4eb4516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', is_admin: true}
export {companies, jobs, user}