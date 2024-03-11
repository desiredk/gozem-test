
/**
 * @swagger
 * components:
 *   schemas:
 *     Package:
 *       type: object
 *       required:
 *       properties:
 *         package_id:
 *           type: string
 *           description: The package_id
 *         active_delivery_id:
 *           type: string
 *           description: The active_delivery_id
 *         description:
 *           type: string
 *           description: The description
 *         weight:
 *           type: integer
 *           description: The weight
 *         width:
 *           type: integer
 *           description: The width
 *         height:
 *           type: integer
 *           description: The height
 *         depth:
 *           type: integer
 *           description: The depth
 *         from_name:
 *           type: string
 *           description: The from_name
 *         from_address:
 *           type: string
 *           description: The from_address
 *         from_location:
 *           type: object
 *           description: The from_location
 *         to_name:
 *           type: string
 *           description: The to_name
 *         to_address:
 *           type: string
 *           description: The to_address
 *         to_location:
 *           type: object
 *           description: The to_location
 *       example:
 *         package_id: Write text here
 *         active_delivery_id: Write text here
 *         description: Write text here
 *         weight: 1
 *         width: 1
 *         height: 1
 *         depth: 1
 *         from_name: Write text here
 *         from_address: Write text here
 *         from_location: {}
 *         to_name: Write text here
 *         to_address: Write text here
 *         to_location: {}
 *
 */
 
 /**
 * @swagger
 * tags:
 *   name: Packages
 *   description: The Packages managing API
 * /packages/list:
 *   post:
 *     summary: Lists all the Packages
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paginate:
 *                 type: object
 *                 properties:
 *                   page:
 *                     type: integer
 *                     description: The page number for pagination
 *                   pageSize:
 *                     type: integer
 *                     description: The number of items per page
 *               filter:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The ID for filtering
 *                   q_list:
 *                     type: array
 *                     description: An array of filter objects
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: The ID for a filter object
 *               just:
 *                 $ref: '#/components/schemas/Package'
 *               orderby:
 *                 type: array
 *                 description: An array of sorting options
 *                 items:
 *                   type: string
 *                   description: A sorting option (e.g., "-id" or "-parentEntity__childEntity__id")
 *     responses:
 *       200:
 *         description: The list of the Packages
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   type: object
 *                   description: The response body
 *                   properties:
 *                     count:
 *                       type: integer
 *                       description: The count of items in the "rows" array
 *                     rows:
 *                       type: array
 *                       description: An array of objects containing the data
 *                       items:
 *                         $ref: '#/components/schemas/Package'
 *       500:
 *         description: Some server error
 * /packages/add/all:
 *   post:
 *     summary: Create many new Package Package
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Package'
 *     responses:
 *       200:
 *         description: The created Package
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Package'
 *       500:
 *         description: Some server error
 * /packages/all:
 *   put:
 *     summary: Update many Package Package
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Package'
 *     responses:
 *       200:
 *         description: The created Package
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Package'
 *       500:
 *         description: Some server error
 * /packages/add:
 *   post:
 *     summary: Create a new Package Package
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Package'
 *     responses:
 *       200:
 *         description: The created Package
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Package'
 *       500:
 *         description: Some server error
 * /packages:
 *   put:
 *     summary: Update the Package by the id
 *     tags: [Packages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Package'
 *     responses:
 *       200:
 *         description: The Package was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Package'
 *       500:
 *         description: Some server error
 * /packages/{id}:
 *   delete:
 *     summary: Remove the Package by id
 *     tags: [Packages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Package id
 *
 *     responses:
 *       200:
 *         description: The Package was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Package'
 *       404:
 *         description: The Package was not found
 */
        