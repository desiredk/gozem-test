
/**
 * @swagger
 * components:
 *   schemas:
 *     Delivery:
 *       type: object
 *       required:
 *       properties:
 *         delivery_id:
 *           type: string
 *           description: The delivery_id
 *         package_id:
 *           type: integer
 *           description: The package
 *         package:
 *           type: object
 *           description: The package
 *         pickup_time:
 *           type: string
 *           description: The pickup_time
 *         start_time:
 *           type: string
 *           description: The start_time
 *         end_time:
 *           type: string
 *           description: The end_time
 *         location:
 *           type: object
 *           description: The location
 *         status:
 *           type: string
 *           description: The status
 *       example:
 *         delivery_id: Write text here
 *         package_id: 1
 *         package: {}
 *         pickup_time: 04:05:06
 *         start_time: 04:05:06
 *         end_time: 04:05:06
 *         location: {}
 *         status: Write text here
 *
 */
 
 /**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: The Deliveries managing API
 * /deliveries/list:
 *   post:
 *     summary: Lists all the Deliveries
 *     tags: [Deliveries]
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
 *                 $ref: '#/components/schemas/Delivery'
 *               orderby:
 *                 type: array
 *                 description: An array of sorting options
 *                 items:
 *                   type: string
 *                   description: A sorting option (e.g., "-id" or "-parentEntity__childEntity__id")
 *     responses:
 *       200:
 *         description: The list of the Deliveries
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
 *                         $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Some server error
 * /deliveries/add/all:
 *   post:
 *     summary: Create many new Delivery Delivery
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Delivery'
 *     responses:
 *       200:
 *         description: The created Delivery
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
 *                     $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Some server error
 * /deliveries/all:
 *   put:
 *     summary: Update many Delivery Delivery
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Delivery'
 *     responses:
 *       200:
 *         description: The created Delivery
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
 *                     $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Some server error
 * /deliveries/add:
 *   post:
 *     summary: Create a new Delivery Delivery
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Delivery'
 *     responses:
 *       200:
 *         description: The created Delivery
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Some server error
 * /deliveries:
 *   put:
 *     summary: Update the Delivery by the id
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Delivery'
 *     responses:
 *       200:
 *         description: The Delivery was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Delivery'
 *       500:
 *         description: Some server error
 * /deliveries/{id}:
 *   delete:
 *     summary: Remove the Delivery by id
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Delivery id
 *
 *     responses:
 *       200:
 *         description: The Delivery was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates whether the request was successful
 *                 body:
 *                   $ref: '#/components/schemas/Delivery'
 *       404:
 *         description: The Delivery was not found
 */
        