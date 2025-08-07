import fastify, {
  FastifyReply,
  FastifySchema,
  FastifyTypeProviderDefault,
  RouteGenericInterface,
} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

import cors from "@fastify/cors";
const server = fastify({ logger: true });
server.register(cors, {
    origin:  ["www.dio.me", "www.fabiodejesus.dev"], // * para qualquer origem
    methods: ["GET"]
})

const statusCode = (
  res: FastifyReply<
    RouteGenericInterface,
    Server<typeof IncomingMessage, typeof ServerResponse>,
    IncomingMessage,
    ServerResponse<IncomingMessage>,
    unknown,
    FastifySchema,
    FastifyTypeProviderDefault,
    unknown
  >,
  codeNumber: number
) => res.type("application/json").code(codeNumber);

interface teamModel {
  id: number;
  name: string;
  base: string;
}

interface driverModel {
  id: number;
  name: string;
  team: string;
}

interface DriverParams {
  id: string;
}

const teams: teamModel[] = [
  {
    id: 1,
    name: "McLaren",
    base: "Working, United Kingdom",
  },
  {
    id: 2,
    name: "Mercedes",
    base: "Brackley, United Kingdom",
  },
  {
    id: 3,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
  },
];

const drivers: driverModel[] = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Ferrari",
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
  },
];

server.get("/teams", async (req, res) => {
  statusCode(res, 200);

  return teams;
});

server.get("/drivers", async (req, res) => {
  statusCode(res, 200);

  return drivers;
});

server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const idParam = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === idParam);
  if (!driver) {
    statusCode(res, 404);
    return { message: "Driver Not Found" };
  }

  statusCode(res, 200);
  return { driver };
});

server.listen({ port: 3445 }, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Servidor iniciado`);
});
