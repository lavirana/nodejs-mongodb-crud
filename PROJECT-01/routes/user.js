const express = require("express");

const router = express.Router();


// Routes
router.get('/', async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers
            .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
     .join()}
    </ul>
    `;
    res.send(html);
   //return res.json(allDbUsers);
}) ;

router.route('/:id')
.get( async (req, res) => {
    const id = Number(req.params.id);

   //const user = users.find(user => user.id === id);
   const user = await User.findById(req.params.id);
    return res.json(user);
})
.patch((req, res) => {
    return res.json({status : "Pending"});
})
.delete((req, res) => {
    return res.json({status : "Pending"});
})

router.post('/', async (req, res) => {
    //Create new user
    const body = req.body;
    /*
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({status: "success", id: users. length});
    });
    */

    const result = await User.create ({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    return res.status(201).json({msg: 'success'});
})


router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});

router.patch('/:id', async(req, res) => {
    //Edit the user with ID
    await User.findByIdAndUpdate(req.params.id, {last_name: "Changed"})
    return res.json({status: "pending"});
})

router.delete('/:id', (req, res) => {
    //Delete the user with ID
    return res.json({status: "pending"});
});

module.exports = router;