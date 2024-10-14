import { TaskService } from "./tasks.service";

describe("task service tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ]),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test("should be success when TaskService.getTasks have a valid request", async () => {
    await TaskService.getTasks();

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  test("should be error when TaskService.getTasks throw error", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Ha ocurrido un error"));
    const error = await TaskService.getTasks().catch((error) => error);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(error).toBeInstanceOf(Error);
  });
});
